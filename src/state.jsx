const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivan@ya.ru",
  id: 1,
  about: "Тут я рассказываю о себе...",
  avatar: "https://www.seekpng.com/png/full/356-3562377_personal-user.png",
};

const users = {
  0: { name: "Валерия", lastname: "Енотина" },
  1: { name: "Ипатий", lastname: "Яблочков" },
  2: { name: "Серж", lastname: "Петров" },
  3: { name: "Константин", lastname: "Тетерин" },
  4: { name: "Владислав", lastname: "Енотин" },
  5: {name: "Евгения", lastname: "Петрова"},
};

export function getUser() {
  return user;
}


export function getUsers() {
  return users;
}