public class Solution
{
    public int MinCost(string colors, int[] neededTime)
    {
        int total = 0;
        int maxTime = neededTime[0];
        
        for (int i = 1; i < colors.Length; i++)
        {
            if (colors[i] != colors[i - 1])
            {
                maxTime = 0;
            }
            total += (maxTime < neededTime[i] ? maxTime : neededTime[i]);
            maxTime = (maxTime > neededTime[i] ? maxTime : neededTime[i]);
        }
        
        return total;
    }
}