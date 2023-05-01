import axios from 'axios';
import { useSession } from 'next-auth/react';
import { Inter } from 'next/font/google';
import Footer from '../../components/footer';
import Header from '../../components/header';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ country }) {
  const { data: session } = useSession();

  return (
    <div>
      <Header country={country} />

      <Footer country={country} />
    </div>
  );
}

export async function getServerSideProps() {
  let data = await axios
    .get('https://api.ipregistry.co/?key=${process.env.IPREGISTRY_API_KEY}')
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      // country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: 'Bangladesh',
        flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Flag_of_Bangladesh.svg/1200px-Flag_of_Bangladesh.svg.png',
      },
    },
  };
}
