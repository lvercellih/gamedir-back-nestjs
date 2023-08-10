import { model } from "src/objection/objection.model";
// import { Model } from "objection";

export class GameModel extends model({
  tableName: 'game'
}) {}
