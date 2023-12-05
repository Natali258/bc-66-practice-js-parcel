// // Створіть функцію getWeekDay(date), яка показує день тижня у короткому форматі:
// // «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «НД».
// import format from 'date-fns/format';
// import { uk } from 'date-fns/locale';
// // const daysArr = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
// // const getWeekDay = date => {
// //   const index = new Date(date).getDay();

// //   console.log(daysArr[index]);
// // };
// // getWeekDay('2013-04-19');
// const getWeekDay = date => {
//   console.log(format(new Date(date), 'EEEEEE', { locale: uk }));
// };
// getWeekDay('2013-04-19');
