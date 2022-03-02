import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

import { createServer, Model } from "miragejs";

createServer({
  //o models é o banco de dados do miragejs //
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freela web",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-12-08 09:00:00"),
        },
        {
          id: 2,
          title: "Consultoria TST",
          type: "withdraw",
          category: "Renda Extra",
          amount: 3000,
          createdAt: new Date("2021-10-20 10:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transaction", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      //o schema é o banco de dados //
      return schema.create("transaction", data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
