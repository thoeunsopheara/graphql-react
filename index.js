
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");


const app = express();
app.use(cors({ origin: 'http://localhost:3000 ' }))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}));

app.use(express.static('public'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Express is running at port ${PORT}`));