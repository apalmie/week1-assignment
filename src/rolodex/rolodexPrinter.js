import people from './people.json';

people.forEach((person) => {
  const { name, email, phone } = person;
  const [firstName, lastName] = name.split(' ');
  return `First name ${firstName}
Last name: ${lastName}
Email: ${email}
Phone number: ${phone}
`;
});
