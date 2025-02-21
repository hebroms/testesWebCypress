import HomePage from '../pages/actions/HomePage';
import NovosPage from '../pages/actions/NovosPage';
import CarroNovoPage from '../pages/actions/CarroNovoPage';

describe('Fluxo completo de envio de lead', () => {
  it('Deve acessar um veículo novo e enviar um lead com sucesso', () => {
    HomePage.acessarHome();
    HomePage.validarPaginaHome();
    HomePage.acessarMenuNovos();

    NovosPage.validarPaginaNovos();
    NovosPage.selecionarVeiculo();

    CarroNovoPage.validarPaginaCarroNovo();
    CarroNovoPage.acessarFormulario();
    CarroNovoPage.validarFormulario();
    CarroNovoPage.preencherLead();
    CarroNovoPage.enviarLead();
    CarroNovoPage.validarEnvioLead();
  });
});
