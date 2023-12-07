import axios from "axios";
async function getUseName(id) {
  const userName = await axios(`http://localhost:8000/api/users/${id}`);

  // const res = await userName.json();
  // console.log(res);
  console.log(
    userName.data.data.user.firstname + " " + userName.data.data.user.lastname
  );
}

export default getUseName;
