// import { faker } from '@faker-js/faker';
import { faker } from '@faker-js/faker/locale/en';

export function generateUser() {
  const gender = faker.person.sexType();
  const firstName = faker.person.firstName(gender);
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName }).toLowerCase();
  const username = `${firstName.toLowerCase()}_${lastName.toLowerCase()}`;

  return {
    firstName,
    lastName,
    username,
    email,
    gender,
    password: 'Aa@12345678',
    token: '12345678',
    emailToken: '12345678',
    verifyCode: '12345678',
    referralCode: '12345678',
  };
}
