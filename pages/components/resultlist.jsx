import axios from 'axios';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { InputContext } from '../searchpage';
import Antonyms from './antonyms';
import Example from './example';
import MeaningList from './meaninglist';
import Synonyms from './synonyms';
import { AiFillAudio } from 'react-icons/ai';
import Phonetics from './phonetics';
import { AiOutlineLoading3Quarters } from 'react-icons';

const ResultList = () => {
  const { inputValue, setInputValue } = useContext(InputContext);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${param}`
      );
      setResponse(res.data);
      setError(null);
    } catch (error) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue);
    }
  }, [inputValue]);

  if (loading) {
    return (
      <h1 className="text-center mt-10 font-semibold text-gray-500">
        Loading...
      </h1>
    );
  }

  if (error) {
    return (
      <h3 className="text-center mt-10 font-semibold text-gray-500">
        No definitions Found 😒
      </h3>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      {response && (
        <div>
          <h3 className="text-2xl font-bold mt-4">Meaning & Definitions:</h3>
          <MeaningList mean={response} />
          <h3 className="text-2xl text-orange-400 font-bold mt-4">
            <AiFillAudio />
          </h3>
          <h3 className="text-2xl font-bold mt-4">phonetics</h3>
          <Phonetics mean={response} />
          <h3 className="text-2xl font-bold mt-4">Examples</h3>
          <Example mean={response} />
          <h3 className="text-2xl font-bold mt-4">Synonyms</h3>
          <Synonyms mean={response} />
          <h3 className="text-2xl font-bold mt-4">Antonyms</h3>
          <Antonyms mean={response} />
        </div>
      )}
    </div>
  );
};

export default ResultList;
