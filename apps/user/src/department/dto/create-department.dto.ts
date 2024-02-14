import { ApiProperty } from "@nestjs/swagger";

export class CreateDepartmentDto {

    @ApiProperty({ example: 'depart1' })
    name: string;

    @ApiProperty({ example: [] })
    users: number[];
}
