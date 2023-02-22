<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class VaccinResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nom' => $this->nom,
            'type' => $this->type,
            'date_prod' => $this->date_prod,
            'date_exp' =>$this->date_exp,
            'fabricant' =>$this->fabricant,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
