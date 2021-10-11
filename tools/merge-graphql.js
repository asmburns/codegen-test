const path = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs } = require("@graphql-tools/merge");
const { print } = require("graphql");
const fs = require("fs");

const graphqlDir = path.join(__dirname, "../src/graphql");
const generatedDir = path.join(__dirname, "../src/graphql/generated");
const schemaFilePath = path.join(generatedDir, "schema.graphql");

if (fs.existsSync(generatedDir) && fs.existsSync(schemaFilePath)) {
  fs.unlinkSync(schemaFilePath);
}

const typesArray = loadFilesSync(graphqlDir, {
  extensions: ["graphqls"],
});
const typeDefs = mergeTypeDefs(typesArray);
const printedTypeDefs = print(typeDefs);

if (!fs.existsSync(generatedDir)) {
  fs.mkdirSync(generatedDir);
}
fs.writeFileSync(schemaFilePath, printedTypeDefs);
