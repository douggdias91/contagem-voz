// Configuracao do Supabase para o app Contagem por Voz.
// A anon key e publica por design e pode ficar no frontend.
// A seguranca real deve ser feita pelas politicas RLS do Supabase.
window.CONTAGEM_SUPABASE = {
  url: "COLE_AQUI_A_PROJECT_URL",
  anonKey: "COLE_AQUI_A_ANON_PUBLIC_KEY",
  workspace: "leao-contagem-voz"
};
