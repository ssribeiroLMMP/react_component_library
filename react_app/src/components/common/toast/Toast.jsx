// # Main Import and Utils
import { useCallback, useEffect } from 'react';

// # Import Component Style
import './Toast.css'

function Toast(props) {
  const toastList = props.toastList
  const setToastList = props.setToastList
  console.log(toastList)
  const deleteToast = useCallback(id => {
    const toastListItem = toastList.filter(e => e.id !== id);
    setToastList(toastListItem);
  }, [toastList, setToastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if(toastList.length) {
        deleteToast(toastList[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    }
  }, [toastList, deleteToast]);

  // Render the Component
  return (
    <div className="toast-container toast-position">
      {toastList.map((toastItem, i) => (
          <div className="toast-notification toast-position"
            key={i}
            style={{ backgroundColor: toastItem.backgroundColor }}>
            <button onClick={() => deleteToast(toastItem.id)}>X</button>
            <div>
              <p className="toast-title">{toastItem.title}</p>
              <p className="toast-description">{toastItem.description}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Toast