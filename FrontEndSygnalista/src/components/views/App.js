import { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import { postZgloszenie } from "services/postZgloszenie";

import Form from "components/Form/Form";

import CodeForm from "./CodeForm/CodeForm";
import ListWrapper from "./Listwrapper/ListWrapper";

const App = () => {
  const [generatedKod, setGeneratedKod] = useState("");
  const submitFn = useCallback(async (data) => {
    const { kod: generatedKod } = await postZgloszenie(data);
    setGeneratedKod(generatedKod);
  }, []);
  return (
    <>
      {generatedKod && <h1>{generatedKod}</h1>}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <CodeForm />
              <Form submitFn={submitFn} />
            </>
          }
        />
        <Route path="wiadomosci" element={<ListWrapper />} />
      </Routes>
    </>
  );
};

export default App;
