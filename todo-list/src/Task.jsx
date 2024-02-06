export const Task = (props) => {
    return (
        <div
          style={{ display: "flex", justifyContent: "center",marginTop:"20px"}}
        >
          <h1 style={{textDecoration: props.complete ? "line-through" : "none"}}>{props.taskName}</h1>
          <button
          style={{
            marginLeft: "10px",
            marginTop: "25px",
            height: "30px",
            
          }}
          onClick={()=>props.CompleteTask(props.id)}
          >Update</button>
          <button
            style={{
              marginLeft: "10px",
              marginTop: "25px",
              height: "30px",
            }}
            onClick={() => props.DeleteValue(props.id)}
          >
            x
          </button>
        </div>
      );
}