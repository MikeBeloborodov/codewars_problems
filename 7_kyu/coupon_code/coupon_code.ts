/*
  https://www.codewars.com/kata/539de388a540db7fec000642/train/javascript

    Story
  Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

  Task
  Your mission:
  Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

  A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

  Examples:
  checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
  checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false
* */

export const checkCoupon = (
  enteredCode: string,
  correctCode: string,
  currentDate: string,
  expirationDate: string,
): boolean => {
  if (enteredCode !== correctCode) return false;
  const currDate = new Date(currentDate);
  const expDate = new Date(expirationDate);
  const diff = (expDate.getTime() - currDate.getTime()) / 1000 / 60 / 60;

  console.log(diff);

  return diff > 0 ? true : diff > -24 ? true : false;
};

//cleaner solution
//function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//  return enteredCode===correctCode && new Date(currentDate) <= new Date(expirationDate);
//}
