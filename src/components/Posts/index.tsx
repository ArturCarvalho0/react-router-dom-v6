import { Outlet, useParams, useSearchParams } from "react-router-dom";
import "./style.css";

export const Posts = () => {
  const params = useParams();
  console.log(params);
  const { id } = params;
  const [qs] = useSearchParams();

  return (
    <div>
      <h1>
        Post {`Para: ${id}`} {`QS: ${qs}`}
      </h1>
      <Outlet />
    </div>
  );
};
