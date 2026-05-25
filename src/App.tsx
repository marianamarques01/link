import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { CaseDetailPage } from "./pages/CaseDetailPage";
import { CasesPage } from "./pages/CasesPage";
import { ContatoPage } from "./pages/ContatoPage";
import { EmpresaPage } from "./pages/EmpresaPage";
import { HomePage } from "./pages/HomePage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { ServicosPage } from "./pages/ServicosPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/a-empresa" element={<EmpresaPage />} />
        <Route path="/servicos" element={<ServicosPage />} />
        <Route path="/servicos/:slug" element={<ServiceDetailPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/cases/:slug" element={<CaseDetailPage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Route>
    </Routes>
  );
}
