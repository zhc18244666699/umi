import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card, message, PageHeader } from 'antd';
import HeaderContainer from '../component/Header';
import { history } from 'umi';

import styles from './index.less';

export default function HomeContainer() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [initData, setInitData] = useState<any>({
    tasks: {
      task1: { id: 'task1', userName: '李白', content: '登鹳雀楼' },
      task2: { id: 'task2', userName: '李白', content: '静夜思' },
      task3: { id: 'task3', userName: '杜甫', content: '凉州词' },
      task4: { id: 'task4', userName: '白居易', content: '枫桥夜泊' },
      task5: { id: 'task5', userName: '李白', content: '相思' },
      task6: { id: 'task6', userName: '王维', content: '渭城曲' },
      task7: { id: 'task7', userName: '李商隐', content: '金缕衣' },
      task8: { id: 'task8', userName: '李白', content: '春晓' },
      task9: { id: 'task9', userName: '苏轼', content: '苏幕遮' },
      task10: { id: 'task10', userName: '苏东坡', content: '枫桥夜泊' },
      task11: { id: 'task11', userName: '李白', content: '将进酒' },
      task12: { id: 'task12', userName: '王维', content: '出塞' },
    },
    columns: {
      column1: {
        id: 'column1',
        title: '未背诵',
        taskIds: ['task1', 'task2', 'task3', 'task10', 'task11', 'task12'],
      },
      column2: {
        id: 'column2',
        title: '正在背诵',
        taskIds: ['task4', 'task5', 'task6'],
      },
      column3: {
        id: 'column3',
        title: '已经背诵',
        taskIds: ['task7', 'task8', 'task9'],
      },
    },
    columnOrder: ['column1', 'column2', 'column3'],
  });

  const ListComponent = (props: any) => {
    const { provided, innerRef, children } = props;
    return (
      <div
        className={styles.list_box}
        {...provided.droppableProps}
        ref={innerRef}
      >
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
            唐诗名称：
            <span style={{ color: 'red', fontSize: '24px' }}>
              {props.item.content}
            </span>
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
    <>
      <HeaderContainer title="React 拖拽" subTitle="唐诗三百首" />
      <div className="wrapper" style={{ display: 'flex', padding: '0 24px' }}>
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
    </>
  );
}
