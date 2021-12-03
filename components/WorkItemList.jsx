import { useWorkItemContext } from "../contexts/workItemProvider";

export const WorkItemList = () => {
  const [workItemList, insertWorkItem] = useWorkItemContext();

  const renderedWorkItemList = workItemList.map((workItem) => {
    return (
      <>
        <div key={workItem.id}>
          <li>{workItem.what}</li>
          <li>{workItem.category}</li>
          <li>{workItem.time}</li>
        </div>
      </>
    );
  });
  return <ul>{renderedWorkItemList}</ul>;
};
