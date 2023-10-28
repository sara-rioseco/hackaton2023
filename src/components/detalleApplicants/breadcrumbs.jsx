import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import NoteIcon from '@mui/icons-material/Note';


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <ReceiptIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Proceso
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <PersonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Datos Personales
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <WorkIcon  sx={{ mr: 0.5 }} fontSize="inherit" />
          Experiencia Laboral
        </Typography>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <AccountBoxIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Estudios
        </Typography>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <NoteIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Otros
        </Typography>
      </Breadcrumbs>
    </div>
  );
}