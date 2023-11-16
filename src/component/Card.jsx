
import Carditem from "./Carditem";

const Card = ({ todo }) => {



  return (
    <section className="w-[85%] ms-auto px-10 text-gray-600 body-font">
      <div className="flex lg:flex-row flex-wrap flex-col">
        {todo.map((task,index) => (
       
          <Carditem key={task.id} task={task} />

          ))}

      </div>
    </section>
  );
};

export default Card;
