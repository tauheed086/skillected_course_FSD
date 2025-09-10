
const Profile = ({data}) => {

  return (
    <div>
      <h1>Welcome {data.name}</h1>
      <p>{data.email}</p>
      <button>refresh</button>
    </div>
  )
}

export default Profile