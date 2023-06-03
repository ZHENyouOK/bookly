import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { BookPage } from "../pages/BookPage";
import { PageContainer } from "../components/PageContainer";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export const getBookPageRoute = (bookId) => {
  return `books/${bookId}`;
};

export const router = createHashRouter([
  {
    path: "/",
    element: (
      <PageContainer>
        <HomePage />
      </PageContainer>
    ),
  },
  {
    path: "books/:bookId",
    element: (
      <PageContainer>
        <BookPage />
      </PageContainer>
    ),
  },
  {
    path: "/login",
    element: (
      <PageContainer>
        <LoginPage />
      </PageContainer>
    ),
  },
  {
    path: "/register",
    element: (
      <PageContainer>
        <RegisterPage />
      </PageContainer>
    ),
  },
  {
    path: "*",
    element: (
      <PageContainer>
        <NotFoundPage />
      </PageContainer>
    ),
  },
]);
