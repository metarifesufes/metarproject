// src/pages/Home.jsx
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';
import { Calendar } from 'primereact/calendar';
import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog'; // <-- Importa o modal

const Home = () => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [station, setStation] = useState();
  const [showHelp, setShowHelp] = useState(false); // <-- controla o modal

  const availableItemsArrayTest = ['SBVT'];

  return (
    <div>
      <div style={{ padding: '1rem 2rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Gerador de arquivos callpuf
      </div>

      <Divider />
      <div
        style={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '100%', maxWidth: '450px' }}>
          <Card
            header={
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '30px' }}>
                Gerar Arquivo para CallPuf
              </div>
            }
          >
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="dataInicio">Data início</label>
              <Calendar
                placeholder="Data início"
                dateFormat={'dd/mm/yy'}
                value={startDate}
                onChange={(e) => setStartDate(e.value)}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="dataFim">Data Fim</label>
              <Calendar
                placeholder="Data fim"
                dateFormat={'dd/mm/yy'}
                value={endDate}
                onChange={(e) => setEndDate(e.value)}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="dataFim">Estação</label>
              <Dropdown
                placeholder="Estação"
                options={availableItemsArrayTest.map((item) => ({ label: item, value: item }))} // mapeia corretamente
                value={station}
                onChange={(e) => setStation(e.value)}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ marginBottom: '1rem' }}>
              <Button label="Gerar Arquivo" severity="help" style={{ width: '100%' }} />
            </div>
            <div>
              <Button
                label="Precisa de Ajuda? Instruções Aqui"
                severity="help"
                outlined
                style={{ width: '100%' }}
                onClick={() => setShowHelp(true)}
              />
            </div>
          </Card>
        </div>
      </div>

      <Dialog
        header="Instruções para uso"
        visible={showHelp}
        style={{ width: '35vw', maxWidth: '500px' }}
        onHide={() => setShowHelp(false)}
        resizable={false}
      >
        <p>
          1️⃣ Selecione a <strong>data inicial</strong> e a <strong>data final</strong> do período desejado. <br /><br />
          2️⃣ Escolha a <strong>estação</strong> desejada. <br /><br />
          3️⃣ Clique em <strong>“Gerar Arquivo”</strong> para criar o arquivo CallPuf. <br /><br />
          Caso precise de suporte técnico, entre em contato com o administrador do sistema.
        </p>
      </Dialog>
    </div>
  );
};

export default Home;
