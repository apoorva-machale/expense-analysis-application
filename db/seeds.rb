# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create([
  { 
    username: "Apoorva",
    password: "apoorva"
  }, 
  { 
    username: "Shruti",
    password: "shruti"
  },
  { 
    username: "Pratik",
    password: "pratik"
  }
])

categories = Category.create([
  { 
    categoryname: "Food",
  }, 
  { 
    categoryname: "Shopping",
  },
  { 
    categoryname: "Bills",
  }
])

transactions = Transaction.create([
  {
    userid: 1,
    itemname: "Apple",
    categoryid: 1,
    date: '2022-01-01',
    expense: 20
  },
  {
    userid: 1,
    itemname: "Pant",
    categoryid: 2,
    date: '2022-03-01',
    expense: 30
  },
  {
    userid: 2,
    itemname: "Apple",
    categoryid: 1,
    date: '2022-04-01',
    expense: 50
  }
])

budgets = Budget.create([
  {
    userid: 1,
    categoryid: 1,
    budget_month: '2022-01-01',
    budget: 100
  },
  {
    userid: 1,
    categoryid: 2,
    budget_month: '2022-03-01',
    budget: 300
  },
  {
    userid: 2,
    categoryid: 1,
    budget_month: '2022-04-01',
    budget: 150
  }
])

