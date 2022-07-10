import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export function Dashboard(props) {
  const [wasDataFetched, setWasDataFetched] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    if (wasDataFetched) return;

    const body = new FormData();
    body.append('token', props.token)

    fetch('https://api.iq.academy/api/account/profile', {
      method: 'POST',
      headers: {
        'authorization': 'Bearer ' + props.token
      },
      body: body,

    }).then((response) => {
      return response.json();
    })
      .then((data) => {
        setProfile(data);
        setWasDataFetched(true);
      });
  }, []);

  const onClick = (event) => {
    props.onUpdateToken('');
    router("/login");
  }

  const router = useNavigate();

  return (
    <>
      <div>profile: {JSON.stringify(profile)}</div>
      <button onClick={onClick}>logout</button>
    </>

  );
} 