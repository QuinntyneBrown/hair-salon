namespace HairSalon.Dtos
{
    public class CustomerAddOrUpdateResponseDto: CustomerDto
    {
        public CustomerAddOrUpdateResponseDto(HairSalon.Models.Customer entity)
            :base(entity)
        {

        }
    }
}
