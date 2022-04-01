const initDataSource = {
  tasks: {
    task1: { id: 'task1', userName: '用户a', content: '1登鹳雀楼' },
    task2: { id: 'task2', userName: '用户b', content: '2静夜思' },
    task3: { id: 'task3', userName: '用户c', content: '3凉州词' },
    task4: { id: 'task4', userName: '用户d', content: '4枫桥夜泊' },
    task5: { id: 'task5', userName: '用户e', content: '5相思' },
    task6: { id: 'task6', userName: '用户f', content: '6渭城曲' },
    task7: { id: 'task7', userName: '用户g', content: '7金缕衣' },
    task8: { id: 'task8', userName: '用户h', content: '8春晓' },
    task9: { id: 'task9', userName: '用户i', content: '9苏幕遮' },
    task10: { id: 'task10', userName: '用户j', content: '10枫桥夜泊' },
    task11: { id: 'task11', userName: '用户k', content: '11将进酒' },
    task12: { id: 'task12', userName: '用户m', content: '12出塞' },
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
};

export default initDataSource;
