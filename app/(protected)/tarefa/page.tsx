export default function Tarefa() {
  return (
    <div >
      <h1>Pagína Criar nova Tarefa</h1>
    </div>
  );}

// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Container, Typography, Card, CardContent, Button } from "@mui/material";

// interface User {
//   nome: string;
//   email: string;
//   senha: string;
//   cSenha: string;
// }

// export default function TarefasPage() {
//   const router = useRouter();
//   const [user, setUser] = useState<User | null>(null);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("loggedInUser");
//     console.log("Logged in user from localStorage:", loggedInUser); // Debug: Check localStorage

//     if (!loggedInUser) {
//       console.log("No user found, redirecting to login");
//       router.push("/login");
//     } else {
//       try {
//         const parsedUser: User = JSON.parse(loggedInUser);
//         console.log("Parsed user:", parsedUser); // Debug: Verify parsed user
//         setUser(parsedUser);
//       } catch (error) {
//         console.error("Error parsing loggedInUser:", error);
//         router.push("/login");
//       }
//     }
//     setIsLoading(false);
//   }, [router]);

//   if (isLoading) {
//     return <div>Carregando...</div>; // Show loading state
//   }

//   if (!user) {
//     return null; // Prevent rendering if user is not authenticated
//   }

//   const handleLogout = () => {
//     localStorage.removeItem("loggedInUser");
//     router.push("/login");
//   };

//   return (
//     <Container maxWidth="sm" sx={{ mt: 6 }}>
//       <Card>
//         <CardContent>
//           <Typography variant="h5" component="h1" gutterBottom align="center">
//             Bem-vindo, {user.nome}!
//           </Typography>
//           <Typography variant="body1" align="center">
//             Esta é a página de tarefas. Aqui você verá suas tarefas cadastradas.
//           </Typography>
//           <Button
//             variant="contained"
//             color="secondary"
//             onClick={handleLogout}
//             sx={{ mt: 2 }}
//           >
//             Sair
//           </Button>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }