import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import RootLayout from './components/RootLayout';
import NoteList from './components/NoteList';
import NewNote from './components/NewNote';
import Note from './components/Note';
import EditNote from './components/EditNote';
import NoteLayout from './components/NoteLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <NoteList /> },
      { path: '/new', element: <NewNote /> },
      {
        path: '/:id',
        element: <NoteLayout />,
        children: [
          { index: true, element: <Note /> },
          { path: 'edit', element: <EditNote /> },
        ],
      },
      { path: '*', element: <Navigate to="/" replace={true} /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
