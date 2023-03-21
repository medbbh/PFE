<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    protected $table = "person";

    protected $fillable = [
        'nni',
        'name',
        'prenom',
        'age',
        'sex',
        'nomvaccin',
        'nbrdose',
        'terminervaccin',
        'dateprochaine',
        'dateactuel',
        'lieu',
        'N_lot',
    ];

}
