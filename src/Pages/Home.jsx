import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';
import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { FileUpload } from 'primereact/fileupload';

const Home = () => {
  const [showHelp, setShowHelp] = useState(false);
  const [file, setFile] = useState(null);

  const handleUpload = (event) => {
    const uploadedFile = event.files[0];
    setFile(uploadedFile);
  };

  return (
    <div>
      <div style={{ padding: '1rem 2rem', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Gerador de arquivos CallPuf
      </div>

      <Divider />

      <div
        style={{
          padding: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div style={{ width: '100%', maxWidth: '550px' }}>
          <Card
            header={
              <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '28px' }}>
                Enviar Arquivo
              </div>
            }
          >
            <FileUpload
              mode="basic"
              chooseLabel="Clique para selecionar"
              customUpload
              uploadHandler={handleUpload}
              auto
              style={{
                width: '100%',
                padding: '2rem',
                border: '2px dashed #999',
                borderRadius: '10px',
                textAlign: 'center',
                cursor: 'pointer',
                fontSize: '1.2rem',
              }}
              chooseOptions={{
                icon: 'pi pi-upload',
                label: 'Selecionar Arquivo',
                className: 'p-button-help',
              }}
            />

            {file && (
              <div style={{ marginTop: '1rem', textAlign: 'center', fontSize: '1rem' }}>
                ✅ Arquivo selecionado: <strong>{file.name}</strong>
              </div>
            )}

            <div style={{ marginTop: '2rem' }}>
              <Button label="Gerar Arquivo" severity="help" style={{ width: '100%' }} />
            </div>

            <div style={{ marginTop: '1rem' }}>
              <Button
                label="Como usar o site"
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
        header="Como usar o sistema"
        visible={showHelp}
        style={{ width: '35vw', maxWidth: '500px' }}
        onHide={() => setShowHelp(false)}
        resizable={false}
      >
        <p>
          ✅ Envie um arquivo no formato permitido (ex.: NetCDF, Excel, etc.) <br/><br/>
          ✅ Clique em <strong>“Gerar Arquivo”</strong> para processar<br/><br/>
          ✅ O sistema irá baixar automaticamente o arquivo CallPuf gerado.<br/><br/>
          Caso tenha dúvidas, entre em contato com o responsável pelo projeto.
        </p>
      </Dialog>
    </div>
  );
};

export default Home;
