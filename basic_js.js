var accounts = [
  {
    firstName: "Alex",
    lastName: "Wilson",
    amount: 10,
    accountNumber: 123456
  },
  {
    firstName: "Alex",
    lastName: "Wilson",
    amount: 50,
    accountNumber: 234567
  },
  {
    firstName: "Percy",
    lastName: "Jackson",
    amount: 20,
    accountNumber: 345678
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    amount: 15,
    accountNumber: 456789
  }
]

//-------=====a====------
var listAccountNumbers = accounts.map((account) => {
  return account.accountNumber
})
console.log(listAccountNumbers)

//-------=====b====------
var sumAmount = accounts.reduce((amountTotal, account, index)=>{
  amountTotal = amountTotal + account.amount
  return amountTotal
},0)
console.log(sumAmount)

//-------=====c====------
var listNames = accounts.map((account) => (account.firstName + " " + account.lastName))
  .filter((item, index, self) => (self.indexOf(item) === index))
console.log(listNames)
