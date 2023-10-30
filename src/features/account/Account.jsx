import { useQuery } from '@tanstack/react-query';
import { getAccount } from '../../services/apiAccount';
import Spinner from '../../ui/Spinner';
import { Avatar } from 'flowbite-react';

function Account() {
  const { isLoading, data: accounts } = useQuery({
    queryKey: ['account'],
    queryFn: getAccount,
  });
  if (isLoading) return <Spinner />;

  const currentUserId = 2;
  const { username, name, age, mailId, contactNumber } = accounts.filter(
    (user) => user.id === currentUserId,
  )[0];

  return (
    <>
      {username}, {name}, {age}, {mailId}, {contactNumber}
      <div className="align-left flex">
        <Avatar bordered img="/image2.png" rounded />
      </div>
    </>
  );
}

export default Account;
