const Pool = require("pg").Pool;

const pool = new Pool({
  user:'taqi',
  password:'ayoub',
  host:'localhost',
  port:5432,
  database:"HomeTeam"
});
module.exports = pool;