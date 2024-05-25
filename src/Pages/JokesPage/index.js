import React, { useEffect, useState } from "react";
import { JokesContent } from "../../Components/Jokes/JokesContent";
import { getJokes } from "../../Services";

export const JokesPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    const res = await getJokes();
    const resData = res.data.results.map((item) => ({ ...item, vote: 0 }));
    // console.log(resData);
    return setData(resData);
  };

  const onHandleRmvVote = (i) => {
    let newData = [...data];
    newData[i] = {
      ...newData[i],
      vote: newData[i].vote > 0 ? newData[i].vote - 1 : 0,
    };
    console.log(newData[i]);
    newData.sort((itemA, itemZ) => itemZ.vote - itemA.vote);

    setData(newData);
  };
  const onHandleAddVote = (i) => {
    let newData = [...data];
    newData[i] = {
      ...newData[i],
      vote: newData[i].vote + 1,
    };
    console.log(newData[i]);

    newData.sort((itemA, itemZ) => itemZ.vote - itemA.vote);
    setData(newData);
  };

  return (
    <div>
      <JokesContent
        data={data}
        onArtir={onHandleAddVote}
        onAzalt={onHandleRmvVote}
      />
    </div>
  );
};
