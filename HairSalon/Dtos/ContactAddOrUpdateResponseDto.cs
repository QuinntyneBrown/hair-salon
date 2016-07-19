namespace HairSalon.Dtos
{
    public class ContactAddOrUpdateResponseDto: ContactDto
    {
        public ContactAddOrUpdateResponseDto(HairSalon.Models.Contact entity)
            :base(entity)
        {

        }
    }
}
