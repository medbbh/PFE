<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    use HasFactory;

    protected $table = "stock";

    protected $fillable = [
      'nomvaccin',
      'quantite',
      'lieu',
      'dateproduction',
      'dateexpiration',
      'N_lot'
    ];

}
