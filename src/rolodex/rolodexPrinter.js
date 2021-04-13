import people from './people.json';

people.forEach(function (person) {

  const {name, email, phone} = person;

  const [firstName, lastName] = name.split(' ');

  console.log(`First name ${firstName}
Last name: ${lastName}
Email: ${email}
Phone number: ${phone}
`);

  // console.log('First name: ' + firstName + '\nLast name: ' + lastName + '\nEmail: ' + email + '\nPhone number: ' + phone + '\n');
});
