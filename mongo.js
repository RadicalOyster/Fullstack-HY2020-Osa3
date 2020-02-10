const mongoose = require('mongoose')



const password = process.argv[2]

const url =
`mongodb+srv://tester:${password}@puhelinluettelo-nwcud.mongodb.net/person?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
})

const Person = mongoose.model('Person', personSchema)

const getPersons = () => {
    console.log('phonebook:')
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(person.name, person.number)
        })
        mongoose.connection.close()
    })
}

if (process.argv.length === 3) {
    getPersons()
  }

else if ( process.argv.length === 5) {
    const person = new Person({
        name: process.argv[3],
        number: process.argv[4],
    })

    person.save().then(response => {
        console.log('person saved!');
        mongoose.connection.close();
        })

}

else {
    mongoose.connection.close()
}