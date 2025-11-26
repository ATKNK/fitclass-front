import './Academias.css';
import Button from '../../components/ui/button/Button';
import AcademiasCard from '../../components/card/AcademiasCard';
import { useEffect, useState } from 'react';
import { apiFetch } from '../../utils/api/api';

interface Address {
  street: string;
  cep: string;
  number: string;
  neighborhood: string;
  town: string;
  province: string;
}

interface Gym {
  id: number;
  name: string;
  cnpj: string;
  phoneNumber: string;
  address: Address;
}

export default function Home() {
  const [gyms, setGyms] = useState<Gym[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchGyms = async () => {
      try {
        setError("");

        const data = await apiFetch<Gym[]>("/gym", { method: "GET" });

        setGyms(data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Erro desconhecido!");
        }
      }
    };

    fetchGyms();
  }, []);

  return (
    <div className='academiasMain'>
      <div className='academiasTitle'>
        <p>Encontre sua <span>Academia</span></p>
      </div>

      <form>
        <input className='academiasBuscar' type='text' placeholder='Buscar academia ou aula...' />
      </form>
      
      <Button title='Filtros'/>

      <div className='academiasMap'>
        <img
          className='academiasMapImg'
          src="https://media.discordapp.net/attachments/1114346105426161685/1443012769312936036/image.png?ex=692785de&is=6926345e&hm=39e274cc9bcc034641c54efff5143dee2aa4ef669b19574fbefcd0995be2afd1&=&format=webp&quality=lossless"
        />
      </div>

      <p className='academiasLabel'>Academias Próximas</p>

      {gyms.map(g => (
        <AcademiasCard
          key={g.id}
          title={g.name}
          address={`${g.address.street}, ${g.address.number}`}
          distance="0.69 km"
        />
      ))}
      

      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
}