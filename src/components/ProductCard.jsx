import React from 'react'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function ProductCard({ product, onPreview }) {
  return (
    <Card 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 6
        }
      }}
    >
      <CardMedia
        component="img"
        image={product.img}
        alt={product.team}
        className="mui-card-img"
        sx={{ 
          objectFit: 'contain', 
          pt: 3, 
          pb: 2,
          height: 220, 
          width: '100%',
          cursor: 'pointer'
        }}
        onClick={() => onPreview && onPreview(product)}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
          {product.team}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {product.name}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main' }}>
          {product.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto', p: 2, pt: 0, gap: 1, flexDirection: 'column' }}>
        <Button 
          variant="contained" 
          size="large" 
          fullWidth
          sx={{ fontWeight: 600 }}
        >
          Comprar Ahora
        </Button>
        <Button 
          variant="outlined" 
          size="medium" 
          fullWidth
          onClick={() => onPreview && onPreview(product)}
        >
          Vista Previa
        </Button>
      </CardActions>
    </Card>
  )
}
