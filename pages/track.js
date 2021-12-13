import Head from "next/head";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { useWorkItemContext } from "../contexts/workItemProvider";
import { Table } from "../components/Table";
import { useState } from "react";
import { EditWorkItem } from "../components/EditWorkItem";
import { AddWorkItem } from "../components/AddWorkItem";

export default function Track() {
  //import workitemprovider and distrubte to table components
  const [workItemList, insertWorkItem, setWorkItemList] = useWorkItemContext();
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const openOverlay = () => {
    setIsOverlayOpen(true);
  };
  const closeOverlay = () => {
    setIsOverlayOpen(false);
    setIsTableEditMode(false);
  };

  const [isTableEditMode, setIsTableEditMode] = useState(false);
  const handleEditButtonClick = () => {
    setIsTableEditMode(!isTableEditMode);
  };

  const [initialAddValue, setInitialAddValue] = useState(null);

  const handleEditButtonSingleItemClick = (id) => {
    const found = workItemList.find((element) => {
      return element.id === id;
    });
    setInitialAddValue(found);
    setIsOverlayOpen(true);
    console.log(initialAddValue);
  };

  return (
    <>
      <Head>
        <title>Track</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header header="Track work"></Header>
      <button onClick={openOverlay}>Add</button>
      {isOverlayOpen ? (
        <AddWorkItem
          initialAddValue={initialAddValue}
          handleCloseClick={closeOverlay}
        />
      ) : null}
      <EditWorkItem handleClick={handleEditButtonClick} />
      <Table
        data={workItemList}
        setData={setWorkItemList}
        hasCheckbox={true}
        width={"100%"}
        isTableEditMode={isTableEditMode}
        handleEditItemClick={handleEditButtonSingleItemClick}
      ></Table>
      <Footer></Footer>
    </>
  );
}
