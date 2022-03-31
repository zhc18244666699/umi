import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, message } from 'antd';
import initDataSource from './init.data.js';

export default function HomeContainer() {
  const [initData, setInitData] = useState<any>(initDataSource);

  const ListComponent = (props: any) => {
    const { provided, innerRef, children } = props;
    return (
      <div {...provided.droppableProps} ref={innerRef}>
        {children}
      </div>
    );
  };

  const ListItemComponent = (props: any) => {
    const { provided, innerRef } = props;
    return (
      <div
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={innerRef}
      >
        <Card
          style={{ margin: '10px' }}
          key={props.item.id}
          title={props.item.userName}
        >
          <h2>
            唐诗名称：<span style={{ color: 'red' }}>{props.item.content}</span>
          </h2>
        </Card>
      </div>
    );
  };

  const handleOnDragEnd = async (result: any) => {
    const { draggableId, source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = initData.columns[source.droppableId];
    const finish = initData.columns[destination.droppableId];
    if (start === finish) {
      // 在相同的任务里
      const newTasks = Array.from(start.taskIds);
      newTasks.splice(source.index, 1);
      newTasks.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTasks,
      };
      setInitData({
        ...initData,
        columns: {
          ...initData.columns,
          [newColumn.id]: newColumn,
        },
      });
      return;
    }

    // 移动到另一个任务里
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    setInitData({
      ...initData,
      columns: {
        ...initData.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    });
    message.success('执行成功');
  };

  return (
    <div className="wrapper" style={{ display: 'flex', padding: '24px' }}>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        {initData.columnOrder.map((column: any) => {
          const columnInfo = initData.columns[column];
          return (
            <Droppable key={columnInfo.id} droppableId={columnInfo.id}>
              {(provided: any) => (
                <div
                  className="wrapper_content"
                  style={{
                    flex: '1',
                    margin: '0 5px',
                    border: '1px solid red',
                  }}
                >
                  <h4 style={{ textAlign: 'center', fontSize: '24px' }}>
                    {columnInfo.title}
                  </h4>
                  <ListComponent
                    provided={provided}
                    innerRef={provided.innerRef}
                  >
                    {columnInfo.taskIds.map((task: any, index: number) => {
                      const taskInfo = initData.tasks[task];
                      return (
                        <Draggable
                          key={taskInfo.id}
                          draggableId={taskInfo.id + ''}
                          index={index}
                        >
                          {(providedItem: any, snapshot: any) => (
                            <ListItemComponent
                              item={taskInfo}
                              provided={providedItem}
                              innerRef={providedItem.innerRef}
                              idDragging={snapshot.idDragging}
                            />
                          )}
                        </Draggable>
                      );
                    })}
                  </ListComponent>
                </div>
              )}
            </Droppable>
          );
        })}
      </DragDropContext>
    </div>
  );
}
