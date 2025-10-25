import React, { useState } from 'react'
import ProductCard from './components/ProductCard'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const products = [
  {
    id: 1,
    team: 'Atlético Nacional',
    name: 'Camiseta Titular 2025',
    price: '$150.000',
    img: 'https://i.postimg.cc/Wz74cqrz/nacional.jpg'
  },
  {
    id: 2,
    team: 'América',
    name: 'Camiseta Retro',
    price: '$140.000',
    img: 'https://i.postimg.cc/G3v8jH4B/america.jpg'
  },
  {
    id: 3,
    team: 'Millonarios',
    name: 'Camiseta Alterna',
    price: '$145.000',
    img: 'https://i.postimg.cc/Gp7LK1Rr/imagen-2025-10-25-114527282-removebg-preview.png'
  }
]

export default function App() {
  const [preview, setPreview] = useState(null)

  return (
    <div className="page">
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontWeight: 600 }}>
            ⚽ La Camisetería
          </Typography>
          <Typography variant="body2">Camisetas emblemáticas colombianas</Typography>
        </Toolbar>
      </AppBar>

      {/* Hero section */}
      <Box 
        sx={{ 
          background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
          color: 'white',
          py: 6,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
            Promoción Exclusiva
          </Typography>
          <Typography variant="h6" sx={{ opacity: 0.95, mb: 2 }}>
            Las 3 camisetas más emblemáticas del fútbol colombiano
          </Typography>
          <Typography variant="body1" sx={{ opacity: 0.9 }}>
            Atlético Nacional, América y Millonarios - Ediciones limitadas
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 4 } }}>
        <Box 
          sx={{ 
            display: 'flex',
            gap: 3,
            mt: 4,
            mb: 6,
            justifyContent: 'center',
            flexWrap: 'nowrap',
            overflowX: 'auto',
            '@media (min-width: 900px)': {
              flexWrap: 'nowrap'
            }
          }}
        >
          {products.map((p) => (
            <Box 
              key={p.id} 
              sx={{ 
                flex: '1 1 0',
                minWidth: { xs: '280px', md: '320px' },
                maxWidth: { xs: '350px', md: '400px' }
              }}
            >
              <ProductCard product={p} onPreview={() => setPreview(p)} />
            </Box>
          ))}
        </Box>
      </Container>

      <Box 
        component="footer" 
        sx={{ 
          bgcolor: '#f5f5f5', 
          py: 4, 
          mt: 'auto',
          borderTop: '1px solid #e0e0e0'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4} textAlign="center">
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                La Camisetería
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Las mejores camisetas del fútbol colombiano
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} textAlign="center">
              <Typography variant="body2" color="text.secondary" gutterBottom>
                📧 contacto@lacamiseteria.com
              </Typography>
              <Typography variant="body2" color="text.secondary">
                📱 WhatsApp: +57 300 123 4567
              </Typography>
            </Grid>
          </Grid>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            textAlign="center" 
            sx={{ mt: 3, pt: 2, borderTop: '1px solid #e0e0e0' }}
          >
            © 2025 La Camisetería — Todos los derechos reservados
          </Typography>
        </Container>
      </Box>

      {/* Preview dialog */}
      {preview && (
        <div>
          <PreviewDialog product={preview} onClose={() => setPreview(null)} />
        </div>
      )}
    </div>
  )
}

function PreviewDialog({ product, onClose }) {
  return (
    <>
      <Dialog open={Boolean(product)} onClose={onClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ m: 0, p: 3, bgcolor: 'primary.main', color: 'white' }}>
          <Typography variant="h5" component="div" sx={{ fontWeight: 600 }}>
            {product.team}
          </Typography>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ 
              position: 'absolute', 
              right: 8, 
              top: 8,
              color: 'white'
            }}
          >
            ✕
          </IconButton>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src={product.img} 
                alt={product.team} 
                style={{ 
                  width: '100%', 
                  maxWidth: '400px',
                  objectFit: 'contain' 
                }} 
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                {product.team}
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                {product.name}
              </Typography>
              <Typography variant="h3" sx={{ mt: 3, mb: 3, fontWeight: 700, color: 'primary.main' }}>
                {product.price}
              </Typography>
              <Typography variant="body1" paragraph>
                Camiseta oficial de alta calidad. Diseño auténtico con todos los detalles del equipo.
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                ✓ Material transpirable<br/>
                ✓ Tallas disponibles: S, M, L, XL<br/>
                ✓ Envío a todo el país<br/>
                ✓ Producto 100% original
              </Typography>
              <Button 
                variant="contained" 
                size="large" 
                fullWidth 
                sx={{ mt: 2, py: 1.5, fontWeight: 600 }}
              >
                Comprar Ahora
              </Button>
            </Box>
          </Box>
        </DialogContent>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2, gap: 1 }}>
          <Button variant="outlined" onClick={onClose}>Cerrar</Button>
        </Box>
      </Dialog>
    </>
  )
}

// MUI components used in PreviewDialog
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
