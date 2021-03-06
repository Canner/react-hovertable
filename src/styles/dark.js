export default {
  container: {
    backgroundColor: '#383e4c',
    padding: '5px'
  },
  table: {
    borderCollapse: 'separate'
  },
  cellOuter: {
    cursor: 'pointer',
    padding: '1px'
  },
  cell: {
    default: {
      border: '1px solid #aaa'
    },
    active: {
      backgroundColor: '#aaa'
    },
    mouseOver: {
      backgroundColor: '#eee'
    },
    selected: {
      border: '2px solid #EEE'
    }
  },
  dimensions: {
    background: '#F0F0F0',
    color: '#444',
    fontWeight: 'bold',
    textAlign: 'center',
    position: 'absolute',
    wordBreak: 'keep-all',
    padding: '5px',
    zIndex: 1000
  }
};
