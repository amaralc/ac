import { Card } from '@mui/material';
import { styled } from '@mui/system';

export const StyledHeroSectionCard = styled(Card)(({ theme }) => ({
  height: 200,
  margin: 'auto',
  backgroundColor: '#000',
  borderRadius: theme.spacing(3),
  color: '#fff',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:hover': {
    boxShadow: '#0003 5px 5px 10px',
  },
}));
